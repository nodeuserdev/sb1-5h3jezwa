<?php if (!defined('ABSPATH')) exit; ?>

<div class="cep-question-form">
    <div class="cep-form-field">
        <label for="question_text"><?php _e('Question Text', 'certification-exam-pro'); ?></label>
        <textarea id="question_text" name="question_text" required><?php echo esc_textarea($question_data['text'] ?? ''); ?></textarea>
    </div>

    <div class="cep-form-field">
        <label><?php _e('Answers', 'certification-exam-pro'); ?></label>
        <div class="cep-answers-container">
            <?php for ($i = 0; $i < 4; $i++): ?>
                <div class="cep-answer-row">
                    <input type="text" 
                           name="answers[]" 
                           value="<?php echo esc_attr($question_data['answers'][$i] ?? ''); ?>" 
                           placeholder="<?php _e('Answer option', 'certification-exam-pro'); ?>" />
                    <input type="radio" 
                           name="correct_answer" 
                           value="<?php echo $i; ?>" 
                           <?php checked(($question_data['correct_answer'] ?? -1), $i); ?> />
                    <label><?php _e('Correct', 'certification-exam-pro'); ?></label>
                </div>
            <?php endfor; ?>
        </div>
    </div>

    <div class="cep-form-field">
        <label for="explanation"><?php _e('Explanation', 'certification-exam-pro'); ?></label>
        <textarea id="explanation" name="explanation"><?php echo esc_textarea($question_data['explanation'] ?? ''); ?></textarea>
    </div>
</div>