<?php
class CEP_Loader {
    protected $actions;
    protected $filters;

    public function __construct() {
        $this->actions = array();
        $this->filters = array();

        $this->load_dependencies();
        $this->define_admin_hooks();
        $this->define_public_hooks();
    }

    private function load_dependencies() {
        require_once CEP_PLUGIN_DIR . 'admin/class-cep-admin.php';
        require_once CEP_PLUGIN_DIR . 'public/class-cep-public.php';
        require_once CEP_PLUGIN_DIR . 'includes/class-cep-post-types.php';
        require_once CEP_PLUGIN_DIR . 'includes/class-cep-payment.php';
    }

    private function define_admin_hooks() {
        $plugin_admin = new CEP_Admin();
        
        $this->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
        $this->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
        $this->add_action('admin_menu', $plugin_admin, 'add_plugin_admin_menu');
    }

    private function define_public_hooks() {
        $plugin_public = new CEP_Public();
        
        $this->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
        $this->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
    }

    public function add_action($hook, $component, $callback) {
        $this->actions = $this->add($this->actions, $hook, $component, $callback);
    }

    public function add_filter($hook, $component, $callback) {
        $this->filters = $this->add($this->filters, $hook, $component, $callback);
    }

    private function add($hooks, $hook, $component, $callback) {
        $hooks[] = array(
            'hook'      => $hook,
            'component' => $component,
            'callback'  => $callback
        );
        return $hooks;
    }

    public function run() {
        foreach ($this->filters as $hook) {
            add_filter($hook['hook'], array($hook['component'], $hook['callback']));
        }

        foreach ($this->actions as $hook) {
            add_action($hook['hook'], array($hook['component'], $hook['callback']));
        }
    }
}