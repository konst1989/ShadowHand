import sys

def execute_script(script):
    exec(script)

if __name__ == "__main__":
    script = sys.argv[1]
    execute_script(script)