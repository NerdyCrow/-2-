<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="document">
        <html>
            <body>

                <table border="2">
                    <tr bgcolor="grey">
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Проходной балл</th>
                        <th>Год рождения</th>
                    </tr>
                    <xsl:for-each select="list/person">
                        <xsl:sort select="year" />
                        <tr align="center" style="border-color: red">
                            <xsl:choose>
                                <xsl:when test="av &lt; 6">
                                    <td style="background-color: red">
                                        <xsl:value-of select="name" />
                                    </td>
                                    <td style="background-color: red">
                                        <xsl:value-of select="surname" />
                                    </td>
                                    <td style="background-color: red;">
                                        <xsl:value-of select="av" />
                                    </td>
                                    <td style="background-color: red">
                                        <xsl:value-of select="year" />
                                    </td>
                                </xsl:when>
                                <xsl:when test="av=6">
                                    <td style="background-color: #58E000;">
                                        <xsl:value-of select="name" />
                                    </td>
                                    <td style="background-color: #58E000;">
                                        <xsl:value-of select="surname" />
                                    </td>
                                    <td style="background-color: #58E000;">
                                        <xsl:value-of select="av" />
                                    </td>
                                    <td style="background-color: #58E000;">
                                        <xsl:value-of select="year" />
                                    </td>
                                </xsl:when>
                                <xsl:otherwise>
                                    <td>
                                        <xsl:value-of select="name" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="surname" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="av" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="year" />
                                    </td>
                                </xsl:otherwise>
                            </xsl:choose>

                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
