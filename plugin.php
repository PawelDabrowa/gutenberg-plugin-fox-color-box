<?php

/**
 * Plugin Name: Fox Border Box
 * Author: Pawel Dabrowa
 * Version: 1.0.0
 */

function loadMyBlockFiles() {
  wp_enqueue_script(
    'my-super-unique-handle',
    plugin_dir_url(__FILE__) . 'script.js',
    array('wp-blocks', 'wp-i18n', 'wp-editor'),
    true
  );
}
 
add_action('enqueue_block_editor_assets', 'loadMyBlockFiles');
