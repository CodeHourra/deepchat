// 翻译键值类型
export interface TranslationMap {
  [key: string]: string
}

// 定义支持的语言
export const supportedLocales = ['zh-CN', 'zh-TW', 'en-US', 'ja', 'ko', 'fr', 'de', 'es']

// 上下文菜单翻译
export const contextMenuTranslations: Record<string, TranslationMap> = {
  'zh-CN': {
    copy: '复制',
    paste: '粘贴',
    cut: '剪切',
    selectAll: '全选',
    undo: '撤销',
    redo: '重做',
    saveImage: '图片另存为...',
    copyImage: '复制图片'
  },
  'zh-TW': {
    copy: '複製',
    paste: '貼上',
    cut: '剪下',
    selectAll: '全選',
    undo: '復原',
    redo: '重做',
    saveImage: '圖片另存為...',
    copyImage: '複製圖片'
  },
  'en-US': {
    copy: 'Copy',
    paste: 'Paste',
    cut: 'Cut',
    selectAll: 'Select All',
    undo: 'Undo',
    redo: 'Redo',
    saveImage: 'Save Image...',
    copyImage: 'Copy Image'
  },
  ja: {
    copy: 'コピー',
    paste: '貼り付け',
    cut: '切り取り',
    selectAll: 'すべて選択',
    undo: '元に戻す',
    redo: 'やり直し',
    saveImage: '画像を保存...',
    copyImage: '画像をコピー'
  },
  ko: {
    copy: '복사',
    paste: '붙여넣기',
    cut: '잘라내기',
    selectAll: '모두 선택',
    undo: '실행 취소',
    redo: '다시 실행',
    saveImage: '이미지 저장...',
    copyImage: '이미지 복사'
  },
  fr: {
    copy: 'Copier',
    paste: 'Coller',
    cut: 'Couper',
    selectAll: 'Tout sélectionner',
    undo: 'Annuler',
    redo: 'Rétablir',
    saveImage: "Enregistrer l'image...",
    copyImage: "Copier l'image"
  },
  de: {
    copy: 'Kopieren',
    paste: 'Einfügen',
    cut: 'Ausschneiden',
    selectAll: 'Alles auswählen',
    undo: 'Rückgängig',
    redo: 'Wiederholen',
    saveImage: 'Bild speichern...',
    copyImage: 'Bild kopieren'
  },
  es: {
    copy: 'Copiar',
    paste: 'Pegar',
    cut: 'Cortar',
    selectAll: 'Seleccionar todo',
    undo: 'Deshacer',
    redo: 'Rehacer',
    saveImage: 'Guardar imagen...',
    copyImage: 'Copiar imagen'
  }
}

// 错误消息翻译
export const errorMessageTranslations: Record<string, TranslationMap> = {
  'zh-CN': {
    mcpConnectionErrorTitle: 'MCP 连接错误',
    mcpConnectionErrorMessage: '连接到 MCP 服务器失败',
    addMcpServerErrorTitle: '添加服务器失败',
    addMcpServerDuplicateMessage: '服务器名称 "{serverName}" 已存在。请选择一个不同的名称。',
    getMcpToolListErrorTitle: '获取工具定义失败',
    getMcpToolListErrorMessage: "无法从服务器 '{serverName}' 获取工具列表: {errorMessage}",
    genericErrorTitle: '错误',
    genericErrorMessage: '发生了一个错误'
  },
  'zh-TW': {
    mcpConnectionErrorTitle: 'MCP 連接錯誤',
    mcpConnectionErrorMessage: '連接到 MCP 服務器失敗',
    addMcpServerErrorTitle: '添加服務器失敗',
    addMcpServerDuplicateMessage: '服務器名稱 "{serverName}" 已存在。請選擇一個不同的名稱。',
    getMcpToolListErrorTitle: '獲取工具定義失敗',
    getMcpToolListErrorMessage: "無法從服務器 '{serverName}' 獲取工具列表: {errorMessage}",
    genericErrorTitle: '錯誤',
    genericErrorMessage: '發生了一個錯誤'
  },
  'en-US': {
    mcpConnectionErrorTitle: 'MCP Connection Error',
    mcpConnectionErrorMessage: 'Failed to connect to MCP server',
    addMcpServerErrorTitle: 'Failed to Add Server',
    addMcpServerDuplicateMessage:
      'Server name "{serverName}" already exists. Please choose a different name.',
    getMcpToolListErrorTitle: 'Failed to Get Tool Definitions',
    getMcpToolListErrorMessage:
      "Unable to retrieve tool list from server '{serverName}': {errorMessage}",
    genericErrorTitle: 'Error',
    genericErrorMessage: 'An error occurred'
  },
  ja: {
    mcpConnectionErrorTitle: 'MCP 接続エラー',
    mcpConnectionErrorMessage: 'MCP サーバーへの接続に失敗しました',
    addMcpServerErrorTitle: 'サーバーの追加に失敗しました',
    addMcpServerDuplicateMessage:
      'サーバー名「{serverName}」はすでに存在します。別の名前を選択してください。',
    getMcpToolListErrorTitle: 'ツール定義の取得に失敗しました',
    getMcpToolListErrorMessage:
      "サーバー '{serverName}' からツールリストを取得できません: {errorMessage}",
    genericErrorTitle: 'エラー',
    genericErrorMessage: 'エラーが発生しました'
  },
  ko: {
    mcpConnectionErrorTitle: 'MCP 연결 오류',
    mcpConnectionErrorMessage: 'MCP 서버에 연결하지 못했습니다',
    addMcpServerErrorTitle: '서버 추가 실패',
    addMcpServerDuplicateMessage:
      '서버 이름 "{serverName}"이(가) 이미 존재합니다. 다른 이름을 선택하십시오.',
    getMcpToolListErrorTitle: '도구 정의 가져오기 실패',
    getMcpToolListErrorMessage:
      "서버 '{serverName}'에서 도구 목록을 검색할 수 없습니다: {errorMessage}",
    genericErrorTitle: '오류',
    genericErrorMessage: '오류가 발생했습니다'
  },
  fr: {
    mcpConnectionErrorTitle: 'Erreur de connexion MCP',
    mcpConnectionErrorMessage: 'Échec de la connexion au serveur MCP',
    addMcpServerErrorTitle: "L'ajout du serveur a échoué",
    addMcpServerDuplicateMessage:
      'Le nom du serveur "{serverName}" existe déjà. Veuillez choisir un nom différent.',
    getMcpToolListErrorTitle: "Échec de la récupération des définitions d'outils",
    getMcpToolListErrorMessage:
      "Impossible de récupérer la liste d'outils du serveur '{serverName}': {errorMessage}",
    genericErrorTitle: 'Erreur',
    genericErrorMessage: "Une erreur s'est produite"
  },
  de: {
    mcpConnectionErrorTitle: 'MCP-Verbindungsfehler',
    mcpConnectionErrorMessage: 'Verbindung zum MCP-Server fehlgeschlagen',
    addMcpServerErrorTitle: 'Server hinzufügen fehlgeschlagen',
    addMcpServerDuplicateMessage:
      'Servername "{serverName}" existiert bereits. Bitte wählen Sie einen anderen Namen.',
    getMcpToolListErrorTitle: 'Tooldefinitionen konnten nicht abgerufen werden',
    getMcpToolListErrorMessage:
      "Die Toolliste konnte nicht vom Server '{serverName}' abgerufen werden: {errorMessage}",
    genericErrorTitle: 'Fehler',
    genericErrorMessage: 'Ein Fehler ist aufgetreten'
  },
  es: {
    mcpConnectionErrorTitle: 'Error de conexión MCP',
    mcpConnectionErrorMessage: 'Error al conectar con el servidor MCP',
    addMcpServerErrorTitle: 'Error al agregar el servidor',
    addMcpServerDuplicateMessage:
      'El nombre del servidor "{serverName}" ya existe. Por favor, elija un nombre diferente.',
    getMcpToolListErrorTitle: 'Error al obtener las definiciones de herramientas',
    getMcpToolListErrorMessage:
      "No se puede recuperar la lista de herramientas del servidor '{serverName}': {errorMessage}",
    genericErrorTitle: 'Error',
    genericErrorMessage: 'Se ha producido un error'
  }
}

/**
 * 根据语言代码获取最佳匹配的翻译
 * @param locale 语言代码
 * @param translations 翻译映射表
 * @returns 匹配的翻译对象
 */
export function getBestMatchTranslation(
  locale: string,
  translations: Record<string, TranslationMap>
): TranslationMap {
  // 默认使用英语
  let targetLocale = 'en-US'

  // 查找最佳匹配的语言
  for (const supported of supportedLocales) {
    if (
      locale.startsWith(supported) ||
      (supported.includes('-') && locale.startsWith(supported.split('-')[0]))
    ) {
      targetLocale = supported
      break
    }
  }

  return translations[targetLocale] || translations['en-US']
}

/**
 * 获取上下文菜单的翻译
 * @param locale 语言代码
 * @returns 上下文菜单翻译
 */
export function getContextMenuLabels(locale: string): TranslationMap {
  return getBestMatchTranslation(locale, contextMenuTranslations)
}

/**
 * 获取错误消息的翻译
 * @param locale 语言代码
 * @returns 错误消息翻译
 */
export function getErrorMessageLabels(locale: string): TranslationMap {
  return getBestMatchTranslation(locale, errorMessageTranslations)
}
