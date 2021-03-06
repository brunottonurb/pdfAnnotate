var te = require('text-encoder')
var fs = require('fs')

export var listObject_1 = new te.TextEncoder().encode(`
2 0 obj [1 0 R 2 0 R] endobj `)

export var listObject_2 = new te.TextEncoder().encode(`
110 0 obj [109 0 R 111 0 R 112 0 R 113 0 R 114 0 R 115 0 R 116 0 R 117 0 R 118 0 R 119 0 R 120 0 R 121 0 R ] endobj`)

export var simpleAnnotationObject = new te.TextEncoder().encode(`111 0 obj <</Type /Annot /Rect [523.827324 393.722208 597.420936 407.233728 ] /Subtype /FreeText /DA (/Invalid_font 9 Tf) /M (D:20180503095253) /T (þÿ o s t e r l a n d) /Contents (þÿ t w o   s e n t e n c e s ?) /NM (okular-{51c4fe1f-ed0f-486f-949b-2ddcd45fbe07}) /F 20 /C [1 1 0 ] /CA 1 /Border [0 0 1 ] /Q 0 /IT /FreeText /P 2 0 R >> endobj
`)

export var simplePageObject = new te.TextEncoder().encode(`
2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
>> endobj
`)

export var simplePageObject_2 = new te.TextEncoder().encode(`
2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
/MediaBox [0 0 612 792]
>> endobj
`)

export var simplePageObject_3 = new te.TextEncoder().encode(`
2 0 obj %some comment
<<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
>> endobj
`)

export var simplePageObject_4 = new te.TextEncoder().encode(`
2 0 obj %some comment
<<
/Type /Page% comment directly after a value
/Contents 10 0 R
/Resources 9 0 R
>> endobj
`)

export var simplePageObject_5 = new te.TextEncoder().encode(`
2 0 obj %some comment
<<
/Type /Page% comment directly after a value
/Contents 10 0 R
/Resources 9 0 R
>>%and also a comment
endobj
`)

export var simplePageObject_6 = new te.TextEncoder().encode(`
2 0 obj %some comment
<<
/Type%some comment
/Page
/Contents 10 0 R
/Resources 9 0 R
>>%and also a comment
endobj
`)

export var simplePageObject_7 = new te.TextEncoder().encode(`
2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
/MediaBox[0 0 612 792]
>> endobj
`)

export var simplePageObject_8 = new te.TextEncoder().encode(`
2 0 obj <<
/Type (Some string value)
>> endobj
`)

export var simplePageObject_9 = new te.TextEncoder().encode(`
2 0 obj <<
/Type (/Invalid 10 TFa )
/Resources 9 0 R
>> endobj
`)

export var simplePageObject_10 = new te.TextEncoder().encode(`
2 0 obj <<
/Type (D:20180503095253)
/A (something)
/Resources 9 0 R
>> endobj
`)

export var simplePageObject_11 = new te.TextEncoder().encode(`
2 0 obj <<
/Type(D:20180503095253)
/A (something)
/Resources 9 0 R
>> endobj
`)

export var simplePageObject_12 = new te.TextEncoder().encode(`
14 0 obj
<</Subtype/Link/Rect[ 69.75 689.48 525.05 715.01] /BS<</W 0>>/F 4/Dest[ 15 0 R/XYZ 69 756 0] /StructParent 1>>
endobj
`)

export var simpleListObject_1 = new te.TextEncoder().encode(`[0 0 612 792]`)

export var pageObject_string = new te.TextEncoder().encode(`
2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
/MediaBox [0 0 612 792]
/Parent 23 0 R
/Annots [ 3 0 R 4 0 R 5 0 R 6 0 R 7 0 R 8 0 R ]
>> endobj
`)

export var pageObject_string_2 = new te.TextEncoder().encode(`
2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
/MediaBox [0 0 612 792]
/Parent 23 0 R >> endobj
`)

export var pageObject_string_3 = new te.TextEncoder().encode(`
18 0 obj
<< /Type /Page
   /Parent 1 0 R
   /MediaBox [ 0 0 612 792 ]
   /Contents 3 0 R
   /Group <<
      /Type /Group
      /S /Transparency
      /CS /DeviceRGB
   >>
   /Resources 2 0 R
>>
endobj
`)


export var pageObject_string_4 = new te.TextEncoder().encode(`
22 0 obj
<<
/Type /Page
/Resources <<
/ExtGState <<
/G0 63 0 R
/G1 64 0 R
/G2 65 0 R
>>
/XObject <<
/X0 66 0 R
/X1 67 0 R
/X2 68 0 R
/X3 69 0 R
/X4 70 0 R
>>
/Font <<
/F0 71 0 R
/F1 72 0 R
/F2 73 0 R
/F3 74 0 R
>>
>>
/MediaBox [0 0 486 720]
/Annots [75 0 R 76 0 R 77 0 R 78 0 R 79 0 R 80 0 R 81 0 R 82 0 R 83 0 R 84 0 R
85 0 R 86 0 R 87 0 R 88 0 R 89 0 R 90 0 R 91 0 R 92 0 R 93 0 R 94 0 R
95 0 R 96 0 R]
/Contents 97 0 R
/StructParents 0
/Parent 11 0 R
>>
endobj
`)

export var pageObject_string_5 = new te.TextEncoder().encode(`
18 0 obj
<< /Type /Page
   /Parent 1 0 R
   /MediaBox [ 0 0 612 792 ]
   /Contents 3 0 R
   /Group <<
      /Type /Group
      /S /Transparency
      /CS /DeviceRGB>>
   /Resources 2 0 R>>
endobj
`)

export var pageObject_string_6 = new te.TextEncoder().encode(` 1 0 obj<</CropBox[63.0 18.0 739.491 528.12]/Parent 462 0 R/Tabs/S/Contents 3 0 R/Rotate 0/MediaBox[0 0 802.491 537.12]/Resources 2 0 R/Type/Page>>endobj
`)

export var crossReferenceStreamObject_string = new te.TextEncoder().encode(`
625 0 obj
<<
/Length 1644
/ID [<9BFD8283F629F168063225BF31A92429> <6A28637CD303B944B7A012622D2884DD>]
/Info 7 0 R
/Root 1 0 R
/Type /XRef
/Size 626
/Index [0 625]
/W [1 3 0]
/Filter /FlateDecode
>>
stream
endstream
endobj
`)

export var catalogObject = new te.TextEncoder().encode(`
1 0 obj
<<
/OpenAction [4 0 R /XYZ null null null]
/Type /Catalog
>>
endobj
`)

export var annotObject = new te.TextEncoder().encode(`
1173 0 obj
<<
/A <<
/S /URI
/URI <EB345AA632781A90E90781A4A0BF42680D1F1AD67910B293798B0AFFED8407CE12684F21B7F471D96DCE4864CAB970A98E7F911C207A12C6E6900D789BC13AE87E76A9D6B8EDDADE7A53EAA521E6421295EA31305C>
>>
/Border [0 0 0]
/Rect [82.14 576.8 137.1 587.18]
/StructParent 3
/Subtype /Link
/Type /Annot
>>
endobj
`)

export var xrefTable = new te.TextEncoder().encode(`xref\r
0 10\r
0000000000 65535 f\r
0000000015 00000 n\r
0000000066 00000 n\r
0000000149 00000 n\r
0000000798 00000 n\r
0000000293 00000 n\r
0000000367 00000 n\r
0000000464 00000 n\r
0000000828 00000 n\r
0000001125 00000 n\r
trailer

<<
/ID [<59523cb0e70e03cd47937869d5490bf8><8a6428c784714a64d55aaca7a9e08ba0>]
/Encrypt 9 0 R
/Root 1 0 R
/Size 10
>>
startxref
0
%%EOF`)

export var encode = (str: string) => {
    return new te.TextEncoder().encode(str)
}

export var decode = (data: any) => {
    let _data = new Uint8Array(data)

    return new te.TextDecoder().decode(_data)
}

export var loadFromFile = (path: string) => {
    return new Uint8Array(fs.readFileSync(path))
}

export var save = (fileName: string, data: Uint8Array) => {
    fs.writeFile(fileName, Buffer.from(new Uint8Array(data)), (err: any) => {
        if (err) {
            return console.log(err);
        }

        console.log(`The file was written to: ${fileName} `);
    })
}
