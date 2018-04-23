
default: build

build: clean
	@echo "Build the producation file"
	@mkdir dist
	@echo "// `date "+%Y-%m-%d %H:%M:%S"` \n" > dist/compose-parallel.js
	@cat ./prefix.js >> dist/compose-parallel.js
	@head -n -1 -q ./internal/* | sed 's/^/    /' >> dist/compose-parallel.js
	@cat ./suffix.js >> dist/compose-parallel.js

clean:
	@echo "Remove the producation directory"
	@echo
	@rm -rf dist
