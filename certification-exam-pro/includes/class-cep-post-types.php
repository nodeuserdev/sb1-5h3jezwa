<?php
class CEP_Post_Types {
    public static function register_post_types() {
        // Register Exam post type
        register_post_type('cep_exam', array(
            'labels' => array(
                'name' => __('Exams', 'certification-exam-pro'),
                'singular_name' => __('Exam', 'certification-exam-pro'),
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-welcome-learn-more',
        ));

        // Register Question post type
        register_post_type('cep_question', array(
            'labels' => array(
                'name' => __('Questions', 'certification-exam-pro'),
                'singular_name' => __('Question', 'certification-exam-pro'),
            ),
            'public' => true,
            'has_archive' => false,
            'supports' => array('title', 'editor'),
            'menu_icon' => 'dashicons-format-chat',
        ));
    }

    public static function register_taxonomies() {
        register_taxonomy('cep_exam_category', 'cep_exam', array(
            'labels' => array(
                'name' => __('Exam Categories', 'certification-exam-pro'),
                'singular_name' => __('Exam Category', 'certification-exam-pro'),
            ),
            'hierarchical' => true,
            'show_admin_column' => true,
        ));
    }
}