### Hexlet tests and linter status:
[![Actions Status](https://github.com/marik-yakovlev/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/marik-yakovlev/frontend-project-lvl2/actions)
[![Linter-Tests CI](https://github.com/marik-yakovlev/frontend-project-lvl2/actions/workflows/linter&tests.yml/badge.svg?branch=main)](https://github.com/marik-yakovlev/frontend-project-lvl2/actions/workflows/linter&tests.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/3fcfcf54982ba9947863/maintainability)](https://codeclimate.com/github/marik-yakovlev/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3fcfcf54982ba9947863/test_coverage)](https://codeclimate.com/github/marik-yakovlev/frontend-project-lvl2/test_coverage)

## Description:
This is the utility, which shows the difference between two files. The output can be shown with different formats.
<br></br>

**List of supported extensions:**

• JSON (```.json``` file extension)

• YML/YAML (```.yml```or ```.yaml``` file extensions)
<br></br>

## Installation:

```sh
# Step 1 — clone this repository
$ git clone https://github.com/marik-yakovlev/frontend-project-lvl2
# Step 2 — install the dependencies
$ make install
# Step 3 — install the packages
$ sudo npm link
```
## List of commands in terminal:

```sh
# Help window
gendiff -h
# All commands below should run from __fixtures__ folder!
# Show difference with standart (stylish) format
gendiff file1.json file2.json
# Show difference with stylish format
gendiff --format stylish file1.json file2.json
# Show difference with plain format
gendiff --format plain file1.json file2.json
# Show difference with json format
gendiff --format json file1.json file2.json
```

## Difference between two flat JSON files:
[![asciicast](https://asciinema.org/a/518749.svg)](https://asciinema.org/a/518749)

## Difference between two flat YML / YAML files:
[![asciicast](https://asciinema.org/a/518751.svg)](https://asciinema.org/a/518751)


## Difference between two nested files (stylish format):
[![asciicast](https://asciinema.org/a/518756.svg)](https://asciinema.org/a/518756)

## Difference between two nested files (plain format):
[![asciicast](https://asciinema.org/a/518757.svg)](https://asciinema.org/a/518757)

## Difference between two nested files (json format):
[![asciicast](https://asciinema.org/a/518758.svg)](https://asciinema.org/a/518758)