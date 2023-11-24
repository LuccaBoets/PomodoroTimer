import os

# Directory containing the images
image_folder = "."

# List all files in the directory and filter by file extension
allowed_extensions = {".jpg", ".jpeg", ".png"}
image_files = [f for f in os.listdir(image_folder) if os.path.isfile(os.path.join(image_folder, f)) and f.lower().endswith(tuple(allowed_extensions))]

# Generate JavaScript code
js_code = "var wallpapers = [\n"
for image_file in image_files:
    # Generate the path relative to the script
    image_path = os.path.join("..", "Wallpaper", image_file).replace("\\", "/")
    js_code += f'    "{image_path}",\n'
js_code += "];"

# Write the JavaScript code to wallpapers.js
js_file_path = "wallpapers.js"
with open(js_file_path, "w") as js_file:
    js_file.write(js_code)

print(f"JavaScript code has been generated and written to {js_file_path}")
