# close-outdated-issues-action

A GitHub Action that closes issues whose titles include a date that's in the
past.

Dates are assumed to be in the format of `MM-DD-YY[YY]` where `-` could be any
delimeter. The year part is also ignored because why would you date something
before the year 2000?

## Usage

```yml
name: Check for past issues
on:
  schedule:
    - cron: 0 9 * * 5
jobs:
  run-action:
    runs-on: ubuntu-latest
    steps:
    - name: Close issues
      uses: mxie/close-outdated-issues-action@master
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
```
