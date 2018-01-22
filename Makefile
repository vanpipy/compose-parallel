
default: build

build: clean
	@echo "Build the producation file"
	@mkdir dist
	@echo "// `date "+%Y-%m-%d %H:%M:%S"` \n" > dist/parallel-compose.js
	@cat ./internal/* >> dist/parallel-compose.js

clean:
	@echo "Remove the producation directory"
	@echo
	@rm -rf dist
