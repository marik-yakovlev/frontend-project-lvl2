install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
test:
	NODE_OPTIONS=--experimental-vm-modules  npx jest
test-watch:
	NODE_OPTIONS=--experimental-vm-modules  npx jest --watch
test-coverage:
	npm test -- --coverage --coverageProvider=v8