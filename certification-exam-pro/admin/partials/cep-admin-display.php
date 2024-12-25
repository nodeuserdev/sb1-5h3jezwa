<?php if (!defined('ABSPATH')) exit; ?>

<div class="wrap">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    
    <div class="cep-admin-dashboard">
        <div class="cep-stats-container">
            <div class="cep-stat-box">
                <h3><?php _e('Total Exams', 'certification-exam-pro'); ?></h3>
                <p class="cep-stat-number"><?php echo esc_html($this->get_total_exams()); ?></p>
            </div>
            
            <div class="cep-stat-box">
                <h3><?php _e('Total Students', 'certification-exam-pro'); ?></h3>
                <p class="cep-stat-number"><?php echo esc_html($this->get_total_students()); ?></p>
            </div>
            
            <div class="cep-stat-box">
                <h3><?php _e('Monthly Revenue', 'certification-exam-pro'); ?></h3>
                <p class="cep-stat-number">$<?php echo esc_html($this->get_monthly_revenue()); ?></p>
            </div>
        </div>

        <div class="cep-quick-actions">
            <h2><?php _e('Quick Actions', 'certification-exam-pro'); ?></h2>
            <a href="<?php echo admin_url('post-new.php?post_type=cep_exam'); ?>" class="button button-primary">
                <?php _e('Add New Exam', 'certification-exam-pro'); ?>
            </a>
            <a href="<?php echo admin_url('edit.php?post_type=cep_question'); ?>" class="button button-secondary">
                <?php _e('Manage Questions', 'certification-exam-pro'); ?>
            </a>
        </div>
    </div>
</div>