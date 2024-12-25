<?php
class CEP_Deactivator {
    public static function deactivate() {
        // Clean up if needed
        flush_rewrite_rules();
    }
}