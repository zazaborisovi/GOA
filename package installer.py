import os , subprocess

npm_cmd = r"C:\Program Files\nodejs\npm.cmd"

for root , dirs , files in os.walk("."):
    if "package.json" in files:
        print(f"found package.json in {root}")
        try:
            subprocess.run([npm_cmd , 'install'], cwd=root , check=True)
            print("installed succesfully")
        except subprocess.CalledProcessError:
            print("npm install failed")
        except FileNotFoundError:
            print("❌ npm command not found. Make sure Node.js and npm are installed and in your PATH.")