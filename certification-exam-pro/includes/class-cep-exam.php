<?php
class CEP_Exam {
    private $id;
    private $post;

    public function __construct($exam_id) {
        $this->id = $exam_id;
        $this->post = get_post($exam_id);
    }

    public function get_questions($limit = null) {
        $args = array(
            'post_type' => 'cep_question',
            'posts_per_page' => $limit ? $limit : -1,
            'meta_query' => array(
                array(
                    'key' => '_cep_exam_id',
                    'value' => $this->id
                )
            )
        );
        return get_posts($args);
    }

    public function get_free_question_limit() {
        return get_post_meta($this->id, '_cep_free_questions', true);
    }

    public function get_price() {
        return get_post_meta($this->id, '_cep_price', true);
    }
}