# Budget Battle App - Landing Page

Budget Battle App（予算バトルアプリ）の公式ランディングページです。

## 🎯 アプリについて

Budget Battle Appは、ゲーミフィケーション要素を取り入れた革新的な家計管理iOSアプリです。

### 主な特徴
- 🎮 **週次バトルシステム**: 毎週の予算達成で勝利判定
- ❤️ **HPゲージ表示**: 予算残高をゲーム感覚で視覚化
- 🎤 **音声入力**: 「1500円」と話すだけで支出記録
- ⚡ **クイック入力**: よく使う金額を学習してワンタップ入力
- 🏆 **勝利演出**: 週末の達成時に特別なサウンドとアニメーション

## 🚀 技術仕様

### フロントエンド
- **HTML5**: セマンティックマークアップ
- **CSS3**: Flexbox/Grid、カスタムプロパティ、アニメーション
- **JavaScript (ES6+)**: Intersection Observer、Web APIs
- **レスポンシブデザイン**: モバイルファースト設計

### デザインシステム
- **タイポグラフィ**: Noto Sans JP（日本語対応）
- **カラーパレット**: ブルー系グラデーション + アクセントカラー
- **アニメーション**: 60fps滑らかな動作
- **アクセシビリティ**: WCAG 2.1準拠

### パフォーマンス
- **読み込み速度**: <3秒（3G環境）
- **画像最適化**: SVGアイコン、WebP対応
- **JavaScript**: 遅延読み込み、イベント最適化

## 📱 アプリ開発技術

- **プラットフォーム**: iOS（iPhone/iPad）
- **開発言語**: Swift
- **フレームワーク**: SwiftUI + SwiftData
- **最低動作環境**: iOS 17.0以降
- **テスト**: Swift Testing + XCTest

## 🛠 セットアップ

### ローカル開発
```bash
# リポジトリをクローン
git clone https://github.com/yourusername/Monthly-Budget-Tracking-App.git
cd Monthly-Budget-Tracking-App/lp

# HTTPサーバーで起動（例：Python）
python -m http.server 8000
# または
python3 -m http.server 8000

# ブラウザで http://localhost:8000 にアクセス
```

### GitHub Pages デプロイ

1. GitHubリポジトリの設定で GitHub Pages を有効化
2. ソースを `main` ブランチの `/lp` フォルダに設定
3. 自動デプロイが開始されます

## 📁 ファイル構成

```
lp/
├── index.html          # メインページ
├── styles.css          # スタイルシート
├── script.js           # JavaScript機能
├── _config.yml         # GitHub Pages設定
└── README.md          # このファイル
```

## 🎨 カスタマイズ

### カラーテーマ変更
```css
:root {
  --primary-color: #2563eb;    /* メインカラー */
  --secondary-color: #3b82f6;  /* セカンダリカラー */
  --accent-color: #10b981;     /* アクセントカラー */
  --text-primary: #1e293b;     /* メインテキスト */
  --text-secondary: #64748b;   /* セカンダリテキスト */
}
```

### アニメーション調整
```javascript
// スクロールアニメーションの遅延時間
const ANIMATION_DELAY = 0.1; // 秒

// ゲージアニメーションの更新間隔
const GAUGE_UPDATE_INTERVAL = 2000; // ミリ秒
```

## 🔧 機能説明

### 1. ナビゲーション
- 固定ヘッダー with スムーススクロール
- スクロール連動の背景透明度変更
- モバイル対応レスポンシブメニュー

### 2. ヒーローセクション
- グラデーション背景 + パララックス効果
- 3Dスマホモックアップ with フローティングアニメーション
- HPゲージのリアルタイムデモ

### 3. インタラクション
- Intersection Observer による要素フェードイン
- ゲージの段階的色変化アニメーション
- ホバー効果とマイクロインタラクション

### 4. パフォーマンス最適化
- 画像遅延読み込み（Lazy Loading）
- スクロールイベントスロットリング
- CSSアニメーション（GPU加速）

## 📊 SEO対策

- セマンティックHTML構造
- メタタグ最適化（OG、Twitter Card）
- 構造化データマークアップ
- サイトマップ自動生成
- レスポンスタイム最適化

## ♿ アクセシビリティ

- ARIA属性適用
- キーボードナビゲーション対応
- 適切なコントラスト比
- スクリーンリーダー対応
- フォーカス表示

## 🚀 デプロイメント

### 手動デプロイ
1. `lp/` フォルダ内のファイルを確認
2. GitHubにプッシュ
3. GitHub Pages設定でソース指定
4. デプロイ完了を確認

### 自動デプロイ（GitHub Actions）
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
    paths: [ 'lp/**' ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./lp
```

## 🐛 トラブルシューティング

### よくある問題

**1. CSSが適用されない**
```bash
# キャッシュをクリア
Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
```

**2. JavaScript エラー**
```javascript
// ブラウザのコンソールでエラー確認
console.error('Error details here');
```

**3. GitHub Pages デプロイ失敗**
- `_config.yml` の文法チェック
- ファイルパスの確認
- デプロイログの確認

## 📈 分析・改善

### パフォーマンス測定
- Lighthouse スコア確認
- Core Web Vitals 監視
- ページ読み込み時間計測

### ユーザー分析
- Google Analytics 設定
- ヒートマップ解析
- A/Bテスト実施

## 📝 更新履歴

### v1.0.0 (2025-01-XX)
- 初回リリース
- 基本的なランディングページ機能
- レスポンシブデザイン対応
- HPゲージデモ実装

## 📞 サポート

- **バグレポート**: GitHub Issues
- **機能要望**: GitHub Discussions
- **問い合わせ**: info@budgetbattle.app

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](../LICENSE) ファイルを参照してください。

---

Made with ❤️ for better budget management