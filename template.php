<?php

/**
 * @file
 * Process and preprocess for theme.
 */

/**
 * Implements hook_preprocess_html().
 */
function twentyfifteen_preprocess_html(&$variables) {
  $viewport = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width=device-width',
    ),
  );
  drupal_add_html_head($viewport, 'viewport');
}
