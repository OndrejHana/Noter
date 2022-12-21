#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#![allow(unused)]

mod config;
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![config::config_exists])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
