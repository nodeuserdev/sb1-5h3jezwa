<?php
/**
 * Plugin Name: Certification Exam Pro
 * Description: A comprehensive certification exam practice platform with freemium features
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: certification-exam-pro
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('CEP_VERSION', '1.0.0');
define('CEP_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CEP_PLUGIN_URL', plugin_dir_url(__FILE__));

// Load core plugin files
require_once CEP_PLUGIN_DIR . 'includes/class-cep-loader.php';
require_once CEP_PLUGIN_DIR . 'includes/class-cep-activator.php';
require_once CEP_PLUGIN_DIR . 'includes/class-cep-deactivator.php';

// Activation/Deactivation hooks
register_activation_hook(__FILE__, array('CEP_Activator', 'activate'));
register_deactivation_hook(__FILE__, array('CEP_Deactivator', 'deactivate'));

// Initialize the plugin
function run_certification_exam_pro() {
    $plugin = new CEP_Loader();
    $plugin->run();
}
run_certification_exam_pro();