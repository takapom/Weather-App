import styles from "./page.module.css"

export default function TechStack() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>技術スタック</h1>
        <p className={styles.subtitle}>天気予報アプリケーションの開発方法</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>概要</h2>
        <p className={styles.text}>
          私たちの天気予報アプリケーションは、シンプルなデザインかつ、必要な情報のみをすぐに取得できる点に焦点を当てました。
          最新のWebフレームワークと言語を使用し、読み込み速度の速さを重視し現在も開発しております。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>技術スタック</h2>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>⚛️</div>
            <h3 className={styles.techName}>React</h3>
            <p className={styles.techDesc}>インタラクティブな要素を強化するコンポーネントベースのUIライブラリ</p>
          </div>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>🔄</div>
            <h3 className={styles.techName}>Next.js</h3>
            <p className={styles.techDesc}>
              ルーティング、サーバーサイドレンダリング、最適化を提供するReactフレームワーク
            </p>
          </div>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>🎨</div>
            <h3 className={styles.techName}>Weather API</h3>
            <p className={styles.techDesc}>天気情報を取得するためのAPI</p>
          </div>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>🎨</div>
            <h3 className={styles.techName}>Vercel</h3>
            <p className={styles.techDesc}>今回Next.jsを使用しているため、相性がいいVercelでのデプロイにしました。</p>
          </div>
          
        </div>
        
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>API連携</h2>
        <div className={styles.apiSection}>
          <div className={styles.apiInfo}>
            <h3 className={styles.apiTitle}>天気データAPI</h3>
            <p className={styles.text}>
              現在の気象情報のデータを取得するために信頼性の高い天気データプロバイダーと
              連携しています。アプリケーションはこのデータを処理して、意味のあるインサイトと視覚化を提供します。
            </p>
          </div>
          <div className={styles.apiDiagram}>
            <div className={styles.diagramBox}>クライアント</div>
            <div className={styles.diagramArrow}>↔️</div>
            <div className={styles.diagramBox}>Next.js API</div>
            <div className={styles.diagramArrow}>↔️</div>
            <div className={styles.diagramBox}>天気API</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>開発プロセス</h2>
        <div className={styles.processList}>
          <div className={styles.processItem}>
            <div className={styles.processNumber}>1</div>
            <div className={styles.processContent}>
              <h3 className={styles.processTitle}>アプリ仕様の決定</h3>
              <p className={styles.text}>
                ユーザーニーズと利用可能な天気APIに関する広範な調査から始め、
                詳細なワイヤーフレームと技術仕様を作成しました。
              </p>
            </div>
          </div>
          <div className={styles.processItem}>
            <div className={styles.processNumber}>2</div>
            <div className={styles.processContent}>
              <h3 className={styles.processTitle}>API連携・情報の取得と表示</h3>
              <p className={styles.text}>
                デザインチームは、すべてのデバイスで視覚的な魅力を維持しながら、
                天気データを明確に表示するクリーンで直感的なインターフェースを作成しました。
              </p>
            </div>
          </div>
          <div className={styles.processItem}>
            <div className={styles.processNumber}>3</div>
            <div className={styles.processContent}>
              <h3 className={styles.processTitle}>UI/UXの構築</h3>
              <p className={styles.text}>
                コンポーネントの再利用性とパフォーマンスの最適化に焦点を当てて、
                Next.jsとReactを使用してアプリケーションを実装しました。
              </p>
            </div>
          </div>
          <div className={styles.processItem}>
            <div className={styles.processNumber}>4</div>
            <div className={styles.processContent}>
              <h3 className={styles.processTitle}>テストとデプロイ</h3>
              <p className={styles.text}>
                厳格なテストにより、アプリケーションがブラウザやデバイス間で動作することを確認し、
                継続的インテグレーションによるデプロイを行いました。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>課題と解決策</h2>
        <div className={styles.challengeGrid}>
          <div className={styles.challengeCard}>
            <h3 className={styles.challengeTitle}>表示させる天気情報</h3>
            <p className={styles.text}>課題：複雑な天気データを直感的な方法で表示すること。</p>
            <p className={styles.text}>解決策：レスポンシブデザインを備えたカスタム視覚化コンポーネント。</p>
          </div>
          <div className={styles.challengeCard}>
            <h3 className={styles.challengeTitle}>UI・UX品質の向上</h3>
            <p className={styles.text}>課題：データ量の多いページで高速な読み込み時間を確保すること。</p>
            <p className={styles.text}>解決策：データキャッシングとコンポーネントレンダリングの最適化を実装。</p>
          </div>
          <div className={styles.challengeCard}>
            <h3 className={styles.challengeTitle}>他機能の実装</h3>
            <p className={styles.text}>課題：デバイス間で一貫した体験を作成すること。</p>
            <p className={styles.text}>
              解決策：CSSモジュールと柔軟なレイアウトを使用したモバイルファーストアプローチ。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

