<?php
class CEP_Public {
    public function enqueue_styles() {
        wp_enqueue_style('cep-public', CEP_PLUGIN_URL . 'public/css/cep-public.css', array(), CEP_VERSION, 'all');
    }

    public function enqueue_scripts() {
        wp_enqueue_script('cep-public', CEP_PLUGIN_URL . 'public/js/cep-public.js', array('jquery'), CEP_VERSION, false);
        
        wp_localize_script('cep-public', 'cepAjax', array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('cep-nonce')
        ));
    }

    public function register_shortcodes() {
        add_shortcode('certification_exam', array($this, 'render_exam_shortcode'));
        add_shortcode('exam_list', array($this, 'render_exam_list_shortcode'));
    }

    public function render_exam_shortcode($atts) {
        $atts = shortcode_atts(array(
            'id' => 0
        ), $atts);

        ob_start();
        require CEP_PLUGIN_DIR . 'public/partials/exam-display.php';
        return ob_get_clean();
    }

    public function render_exam_list_shortcode($atts) {
        $atts = shortcode_atts(array(
            'category' => '',
            'limit' => 10
        ), $atts);

        ob_start();
        require CEP_PLUGIN_DIR . 'public/partials/exam-list-display.php';
        return ob_get_clean();
    }
}