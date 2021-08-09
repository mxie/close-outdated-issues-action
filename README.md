# close-outdated-issues-action

A GitHub Action that closes issues whose titles contain a date that has passed.

The following date formats are supported:

- `YYYY-MM-DD`
- `YY-MM-DD`

where,

- the leading zero for `MM` and `DD` is optional to represent months January through September.
- the separator (`-` in the examples) can be any character.

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
      uses: mxie/close-outdated-issues-action@main    # replace `main` with release tag
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
```
