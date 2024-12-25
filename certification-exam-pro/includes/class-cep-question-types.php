<?php
class CEP_Question_Types {
    public static function get_question_types() {
        return array(
            'multiple-choice' => __('Multiple Choice', 'certification-exam-pro'),
            'multiple-select' => __('Multiple Select', 'certification-exam-pro'),
            'yes-no' => __('Yes/No', 'certification-exam-pro'),
            'drag-drop' => __('Drag and Drop', 'certification-exam-pro')
        );
    }

    public static function render_question_form($type, $question_data = array()) {
        switch ($type) {
            case 'multiple-choice':
                require CEP_PLUGIN_DIR . 'admin/partials/question-types/multiple-choice.php';
                break;
            case 'multiple-select':
                require CEP_PLUGIN_DIR . 'admin/partials/question-types/multiple-select.php';
                break;
            case 'yes-no':
                require CEP_PLUGIN_DIR . 'admin/partials/question-types/yes-no.php';
                break;
            case 'drag-drop':
                require CEP_PLUGIN_DIR . 'admin/partials/question-types/drag-drop.php';
                break;
        }
    }
}