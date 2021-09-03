<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <style>
                #tb{
                    border:3px solid red;
                    border-radius:5px; 
                }


                #elements
{
border:3px solid blue;
}
#hz1
{
text-align:center;
border:2px solid green;
}
#hz
{
text-align:center;
border:2px solid green;
}
</style>
            <body>
                <table id="tb">
                    <tr id="tr1">
                        <th id="elements">Университет</th>
                        <th id="elements">Проходной балл</th>
                        <th id="elements">План набора</th>
                        <th id="elements">Город</th>
                    </tr>
                    <xsl:for-each select="FACULTY/SPECIALIZATION">
                        <tr>
                            <td id="hz1">
                                <xsl:value-of select="NAME" />
                            </td>
                            <td id="hz">
                                <xsl:value-of select="POINTS" />
                            </td>
                            <td id="hz">
                                <xsl:value-of select="COL" />
                            </td>
                            <td id="hz">
                                <xsl:value-of select="TOWN" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>