
.PHONY: update
update:
	mkdir -p vendor
	curl -s 'http://scribe.pf2.tools/app/app.js' -o vendor/scribe.js
