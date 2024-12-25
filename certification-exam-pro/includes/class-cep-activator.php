<?php
class CEP_Activator {
    public static function activate() {
        // Create necessary database tables
        self::create_tables();
        
        // Register post types
        require_once CEP_PLUGIN_DIR . 'includes/class-cep-post-types.php';
        CEP_Post_Types::register_post_types();
        
        // Clear permalinks
        flush_rewrite_rules();
    }

    private static function create_tables() {
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();

        // User Progress Table
        $sql = "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}cep_user_progress (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            user_id bigint(20) NOT NULL,
            exam_id bigint(20) NOT NULL,
            question_id bigint(20) NOT NULL,
            answer text NOT NULL,
            is_correct tinyint(1) DEFAULT 0,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY  (id)
        ) $charset_collate;";

        // User Purchases Table
        $sql .= "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}cep_user_purchases (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            user_id bigint(20) NOT NULL,
            exam_id bigint(20) NOT NULL,
            amount decimal(10,2) NOT NULL,
            transaction_id varchar(255) NOT NULL,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY  (id)
        ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}