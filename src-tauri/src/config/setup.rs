use tauri::AppHandle;

/// looks for default config file noter.json 
/// returns true if config is found, false otherwise 
#[tauri::command]
pub fn config_exists(app: AppHandle) -> bool {
  let mut config_file_path = app.path_resolver().app_config_dir().unwrap();
  config_file_path.push("noter.json");

  config_file_path.exists()
}
