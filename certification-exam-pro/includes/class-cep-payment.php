<?php
class CEP_Payment {
    public function process_payment($exam_id, $user_id, $amount) {
        // Add payment gateway integration here
        $transaction_id = uniqid('cep_');
        
        $this->save_purchase($exam_id, $user_id, $amount, $transaction_id);
        
        return array(
            'success' => true,
            'transaction_id' => $transaction_id
        );
    }

    private function save_purchase($exam_id, $user_id, $amount, $transaction_id) {
        global $wpdb;
        
        $wpdb->insert(
            $wpdb->prefix . 'cep_user_purchases',
            array(
                'user_id' => $user_id,
                'exam_id' => $exam_id,
                'amount' => $amount,
                'transaction_id' => $transaction_id
            ),
            array('%d', '%d', '%f', '%s')
        );
    }

    public function has_purchased($exam_id, $user_id) {
        global $wpdb;
        
        $purchase = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM {$wpdb->prefix}cep_user_purchases 
            WHERE user_id = %d AND exam_id = %d",
            $user_id,
            $exam_id
        ));
        
        return !empty($purchase);
    }
}