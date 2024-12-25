<?php
class CEP_User_Progress {
    public function save_answer($user_id, $exam_id, $question_id, $answer, $is_correct) {
        global $wpdb;
        
        $wpdb->insert(
            $wpdb->prefix . 'cep_user_progress',
            array(
                'user_id' => $user_id,
                'exam_id' => $exam_id,
                'question_id' => $question_id,
                'answer' => maybe_serialize($answer),
                'is_correct' => $is_correct ? 1 : 0
            ),
            array('%d', '%d', '%d', '%s', '%d')
        );
    }

    public function get_user_progress($user_id, $exam_id) {
        global $wpdb;
        
        return $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM {$wpdb->prefix}cep_user_progress 
            WHERE user_id = %d AND exam_id = %d",
            $user_id,
            $exam_id
        ));
    }
}