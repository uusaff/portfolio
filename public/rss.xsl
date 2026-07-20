<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>RSS Feed - Yousaf Portfolio</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 40px auto; max-width: 700px; padding: 0 20px; background: #0a0a0b; color: #e4e4e7; }
    h1 { font-size: 1.8rem; border-bottom: 1px solid #27272a; padding-bottom: 12px; }
    a { color: #a78bfa; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .item { margin: 24px 0; padding: 16px; border: 1px solid #27272a; border-radius: 12px; background: #18181b; }
    .item h3 { margin: 0 0 8px 0; }
    .item p { margin: 0; color: #a1a1aa; font-size: 0.9rem; }
    .meta { color: #71717a; font-size: 0.8rem; margin-top: 4px; }
    .channel-desc { color: #a1a1aa; margin-bottom: 24px; }
  </style>
</head>
<body>
  <h1><a href="{//channel/link}"><xsl:value-of select="//channel/title"/></a></h1>
  <p class="channel-desc"><xsl:value-of select="//channel/description"/></p>
  <xsl:for-each select="//channel/item">
    <div class="item">
      <h3><a href="{link}"><xsl:value-of select="title"/></a></h3>
      <p><xsl:value-of select="description"/></p>
    </div>
  </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
