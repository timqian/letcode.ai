> [Tim](https://github.com/timqian)'s experiments to ask AI to help coding.

## Experiment 1: Auto solve leetcode problems and submit

Blogs: [EN](https://timqian.com/blog/one-year-indie-hacker.html) / [中文](https://blog.t9t.io/leetcode-gpt-4-2023-11-20/)

https://github.com/timqian/letcode.ai/assets/5512552/114b6c26-5f14-4924-a1ad-2d69984d1181

### How to play with the script
1. Open Chrome in remote debug mode:
    ```bash
    # on macOS
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
    ```
2. Make sure you have logged in to leetcode.com.
3. Run the script.
    ```bash
    # set env variable
    export OPENAI_API_KEY="your API key"
    # run the script
    node agent/leecode.mjs
    ```

