# Tiny Memo

![画面イメージ](https://github.com/tris5572/tauri-tiny-memo/assets/68403260/e76605c1-16ff-4d00-8859-050385360793)

押されたキーを記録するだけの超シンプルなメモアプリです。

Tauri + React を使って Rust で書かれています。（Rust で特に何かをしているわけではありませんが）

## 操作

- アルファベット・数字：文字を追加
- Backspace：1文字削除
- Escape・クリアボタン押下：全クリア

# ビルド方法

恐らく以下の手順でビルドできるのではないかと思います。

1. Rust の開発環境を整える
2. [Tauri](https://tauri.app/) の開発環境を整える
3. `npm run tauri build` を実行してビルドする
