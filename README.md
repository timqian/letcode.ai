[Tim](https://github.com/timqian)'s experiments to ask AI to help coding.

## Experiment 1: Auto solve leetcode problems and submit

<iframe 
  style="width: 640px; height: 430px; max-width: 100%"
  src="https://player.bilibili.com/player.html?bvid=BV1L94y1H78U" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> 
</iframe>

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


**Blog:** 
**Blog in Chinese:** 
