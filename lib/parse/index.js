!function(A,Q){"object"==typeof exports&&"object"==typeof module?module.exports=Q():"function"==typeof define&&define.amd?define([],Q):"object"==typeof exports?exports.asparse=Q():A.asparse=Q()}("undefined"!=typeof self?self:this,function(){return function(A){var Q={};function E(B){if(Q[B])return Q[B].exports;var n=Q[B]={i:B,l:!1,exports:{}};return A[B].call(n.exports,n,n.exports,E),n.l=!0,n.exports}return E.m=A,E.c=Q,E.d=function(A,Q,B){E.o(A,Q)||Object.defineProperty(A,Q,{configurable:!1,enumerable:!0,get:B})},E.r=function(A){Object.defineProperty(A,"__esModule",{value:!0})},E.n=function(A){var Q=A&&A.__esModule?function(){return A.default}:function(){return A};return E.d(Q,"a",Q),Q},E.o=function(A,Q){return Object.prototype.hasOwnProperty.call(A,Q)},E.p="",E(E.s=2)}([function(A,Q,E){"use strict";Q.__esModule=!0,function(A){A[A.i32=127]="i32",A[A.i64=126]="i64",A[A.f32=125]="f32",A[A.f64=124]="f64",A[A.anyfunc=112]="anyfunc",A[A.func=96]="func",A[A.none=64]="none"}(Q.Type||(Q.Type={})),function(A){A[A.Custom=0]="Custom",A[A.Type=1]="Type",A[A.Import=2]="Import",A[A.Function=3]="Function",A[A.Table=4]="Table",A[A.Memory=5]="Memory",A[A.Global=6]="Global",A[A.Export=7]="Export",A[A.Start=8]="Start",A[A.Element=9]="Element",A[A.Code=10]="Code",A[A.Data=11]="Data"}(Q.SectionId||(Q.SectionId={})),function(A){A[A.Function=0]="Function",A[A.Table=1]="Table",A[A.Memory=2]="Memory",A[A.Global=3]="Global"}(Q.ExternalKind||(Q.ExternalKind={})),function(A){A[A.Module=0]="Module",A[A.Function=1]="Function",A[A.Local=2]="Local"}(Q.NameType||(Q.NameType={})),Q.MAX_PAGES=65535,Q.MAX_TABLES=1,function(A){A[A.end=11]="end",A[A.get_global=35]="get_global",A[A.i32_const=65]="i32_const",A[A.i64_const=66]="i64_const",A[A.f32_const=67]="f32_const",A[A.f64_const=68]="f64_const"}(Q.Opcode||(Q.Opcode={}))},function(A,Q,E){"use strict";Q.__esModule=!0;var B=E(0);Q.Type=B.Type,Q.SectionId=B.SectionId,Q.ExternalKind=B.ExternalKind;var n=null;Q.parse=function A(Q,E){E||(E={}),n||(n=new WebAssembly.Module(function(A){var Q=A.length;if(Q){for(var E=0,B=Q;--B%4>1&&61===A.charCodeAt(B);)++E;Q=Math.ceil(3*Q)/4-E}for(var n=new Uint8Array(Q),o=0,e=0,t=0,g=0,C=A.length;g<C;){var r=A.charCodeAt(g++);if(61===r&&o>1)break;if(void 0===(r=I[r]))throw Error();switch(o){case 0:t=r,o=1;break;case 1:n[e++]=t<<2|(48&r)>>4,t=r,o=2;break;case 2:n[e++]=(15&t)<<4|(60&r)>>2,t=r,o=3;break;case 3:n[e++]=(3&t)<<6|r,o=0}}if(1===o)throw Error();return n}("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")));var B=Q.length,o=(B+65535&-65536)>>16,e=new WebAssembly.Memory({initial:o}),t=new Uint8Array(e.buffer);function g(){}t.set(Q),A.readString=function(A,Q){return function(A,Q,E){if(E-Q<1)return"";for(var B=null,n=[],I=0,o=0;Q<E;)(o=A[Q++])<128?n[I++]=o:o>191&&o<224?n[I++]=(31&o)<<6|63&A[Q++]:o>239&&o<365?(o=((7&o)<<18|(63&A[Q++])<<12|(63&A[Q++])<<6|63&A[Q++])-65536,n[I++]=55296+(o>>10),n[I++]=56320+(1023&o)):n[I++]=(15&o)<<12|(63&A[Q++])<<6|63&A[Q++],I>8191&&((B||(B=[])).push(String.fromCharCode.apply(String,n)),I=0);return B?(I&&B.push(String.fromCharCode.apply(String,n.slice(0,I))),B.join("")):String.fromCharCode.apply(String,n.slice(0,I))}(t,A,A+Q)};var C={env:{memory:e}};["onSection","onType","onTypeParam","onTypeReturn","onImport","onFunctionImport","onTableImport","onMemoryImport","onGlobalImport","onMemory","onFunction","onGlobal","onExport","onStart","onSourceMappingURL","onModuleName","onFunctionName","onLocalName"].forEach(function(A){return C.env[A]=E[A]||g}),new WebAssembly.Instance(n,C).exports.parse(0,B)};for(var I=new Array(123),o=0;o<64;)I[o<26?o+65:o<52?o+71:o<62?o-4:o-59|43]=o++},function(A,Q,E){A.exports=E(1)}])});
//# sourceMappingURL=index.js.map