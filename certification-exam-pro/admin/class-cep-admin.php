<?php
class CEP_Admin {
    public function enqueue_styles() {
        wp_enqueue_style('cep-admin', CEP_PLUGIN_URL . 'admin/css/cep-admin.css', array(), CEP_VERSION, 'all');
    }

    public function enqueue_scripts() {
        wp_enqueue_script('cep-admin', CEP_PLUGIN_URL . 'admin/js/cep-admin.js', array('jquery'), CEP_VERSION, false);
    }

    public function add_plugin_admin_menu() {
        add_menu_page(
            __('Certification Exams', 'certification-exam-pro'),
            __('Cert Exams', 'certification-exam-pro'),
            'manage_options',
            'certification-exam-pro',
            array($this, 'display_plugin_admin_page'),
            'dashicons-welcome-learn-more',
            30
        );

        add_submenu_page(
            'certification-exam-pro',
            __('Settings', 'certification-exam-pro'),
            __('Settings', 'certification-exam-pro'),
            'manage_options',
            'certification-exam-pro-settings',
            array($this, 'display_plugin_settings_page')
        );
    }

    public function display_plugin_admin_page() {
        require_once CEP_PLUGIN_DIR . 'admin/partials/cep-admin-display.php';
    }

    public function display_plugin_settings_page() {
        require_once CEP_PLUGIN_DIR . 'admin/partials/cep-admin-settings.php';
    }
}