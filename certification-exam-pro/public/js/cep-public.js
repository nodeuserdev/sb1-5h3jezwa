jQuery(document).ready(function($) {
    // Handle question navigation
    $('.cep-question-nav').on('click', function(e) {
        e.preventDefault();
        const direction = $(this).data('direction');
        const examId = $('#cep-exam-container').data('exam-id');
        
        $.ajax({
            url: cepAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'cep_navigate_question',
                direction: direction,
                exam_id: examId,
                nonce: cepAjax.nonce
            },
            success: function(response) {
                if (response.success) {
                    $('#cep-question-container').html(response.data.html);
                    updateProgressBar(response.data.progress);
                }
            }
        });
    });

    // Handle answer submission
    $('.cep-answer-form').on('submit', function(e) {
        e.preventDefault();
        const formData = $(this).serialize();
        
        $.ajax({
            url: cepAjax.ajaxurl,
            type: 'POST',
            data: formData + '&action=cep_submit_answer&nonce=' + cepAjax.nonce,
            success: function(response) {
                if (response.success) {
                    if (response.data.needsPayment) {
                        showPaywallModal();
                    } else {
                        handleAnswerResponse(response.data);
                    }
                }
            }
        });
    });

    // Handle payment modal
    function showPaywallModal() {
        $('#cep-paywall-modal').show();
    }

    function updateProgressBar(progress) {
        $('.cep-progress-bar').css('width', progress + '%');
        $('.cep-progress-text').text(progress + '% Complete');
    }

    function handleAnswerResponse(data) {
        if (data.isCorrect) {
            showFeedback('Correct!', 'success');
        } else {
            showFeedback('Incorrect. ' + data.explanation, 'error');
        }
    }

    function showFeedback(message, type) {
        const feedbackEl = $('.cep-feedback');
        feedbackEl.removeClass('success error').addClass(type).text(message).show();
        setTimeout(() => feedbackEl.fadeOut(), 3000);
    }
});