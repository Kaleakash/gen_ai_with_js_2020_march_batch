provider "local" {
    # No configuration required for the local provider
}

resource "local_file" "example" {
    filename = "example.txt"
    content  = "Hello, Terraform!"
}

output "file_path" {
    value = local_file.example.filename
}