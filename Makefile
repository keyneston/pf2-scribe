.PHONY: update run

run:
	mkdir -p output
	npm run run -- -i "input.md" -o "output/output.html"

update:
	curl -s 'http://scribe.pf2.tools/app/app.js' -o bin/scribe.js
