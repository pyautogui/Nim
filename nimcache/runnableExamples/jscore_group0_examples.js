/* Generated by the Nim Compiler v1.7.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555124 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555128 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555130 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555919 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555083 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555165 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555164 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555112 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555113 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555120 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555122 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI33555122 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555122.node = NNI33555122;
var NNI33555120 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555120.node = NNI33555120;
var NNI33555113 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555113.node = NNI33555113;
NTI33555164.base = NTI33555112;
NTI33555165.base = NTI33555112;
var NNI33555112 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555164, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555165, name: "up", sons: null}]};
NTI33555112.node = NNI33555112;
var NNI33555083 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555083.node = NNI33555083;
NTI33555112.base = NTI33555083;
NTI33555113.base = NTI33555112;
NTI33555120.base = NTI33555113;
NTI33555122.base = NTI33555120;
var NNI33555919 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554440, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554456, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554440, name: "Field2", sons: null}]};
NTI33555919.node = NNI33555919;
var NNI33555130 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555130.node = NNI33555130;
NTI33555130.base = NTI33555113;
var NNI33555128 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555128.node = NNI33555128;
NTI33555128.base = NTI33555113;
var NNI33555124 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555124.node = NNI33555124;
NTI33555124.base = NTI33555113;

function makeNimstrLit(c_33556802) {
      var result = [];
  for (var i = 0; i < c_33556802.length; ++i) {
    result[i] = c_33556802.charCodeAt(i);
  }
  return result;
  

  
}

function arrayConstr(len_33557180, value_33557181, typ_33557182) {
        var result = new Array(len_33557180);
    for (var i = 0; i < len_33557180; ++i) result[i] = nimCopy(null, value_33557181, typ_33557182);
    return result;
  

  
}

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557141, src_33557142, ti_33557143) {
  var result_33557152 = null;

    switch (ti_33557143.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557132(ti_33557143))) {
      result_33557152 = src_33557142;
      }
      else {
        result_33557152 = [src_33557142[0], src_33557142[1]];
      }
      
      break;
    case 19:
            if (dest_33557141 === null || dest_33557141 === undefined) {
        dest_33557141 = {};
      }
      else {
        for (var key in dest_33557141) { delete dest_33557141[key]; }
      }
      for (var key in src_33557142) { dest_33557141[key] = src_33557142[key]; }
      result_33557152 = dest_33557141;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557143.base == null))) {
      result_33557152 = nimCopy(dest_33557141, src_33557142, ti_33557143.base);
      }
      else {
      if ((ti_33557143.kind == 17)) {
      result_33557152 = (dest_33557141 === null || dest_33557141 === undefined) ? {m_type: ti_33557143} : dest_33557141;
      }
      else {
        result_33557152 = (dest_33557141 === null || dest_33557141 === undefined) ? {} : dest_33557141;
      }
      }
      nimCopyAux(result_33557152, src_33557142, ti_33557143.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557142 === null) {
        result_33557152 = null;
      }
      else {
        if (dest_33557141 === null || dest_33557141 === undefined || dest_33557141.length != src_33557142.length) {
          dest_33557141 = new Array(src_33557142.length);
        }
        result_33557152 = dest_33557141;
        for (var i = 0; i < src_33557142.length; ++i) {
          result_33557152[i] = nimCopy(result_33557152[i], src_33557142[i], ti_33557143.base);
        }
      }
    
      break;
    case 28:
            if (src_33557142 !== null) {
        result_33557152 = src_33557142.slice(0);
      }
    
      break;
    default: 
      result_33557152 = src_33557142;
      break;
    }

  return result_33557152;

}

function mnewString(len_33556894) {
        return new Array(len_33556894);
  

  
}

function addInt(a_33556941, b_33556942) {
        var result = a_33556941 + b_33556942;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557190, a_33557191, b_33557192) {
      var Temporary1;

  var result_33557193 = 0;

  BeforeRet: do {
      if (!(a_33557191 <= i_33557190)) Temporary1 = false; else {        Temporary1 = (i_33557190 <= b_33557192);      }    if (Temporary1) {
    result_33557193 = i_33557190;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  } while (false);

  return result_33557193;

}

function chckIndx(i_33557185, a_33557186, b_33557187) {
      var Temporary1;

  var result_33557188 = 0;

  BeforeRet: do {
      if (!(a_33557186 <= i_33557185)) Temporary1 = false; else {        Temporary1 = (i_33557185 <= b_33557187);      }    if (Temporary1) {
    result_33557188 = i_33557185;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557185, a_33557186, b_33557187);
    }
    
  } while (false);

  return result_33557188;

}

function cstrToNimstr(c_33556805) {
      var ln = c_33556805.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556805.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556805.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556808) {
                    var Temporary5;
            var Temporary7;

  var result_33556809 = null;

    var res_33556843 = newSeq_33556826((s_33556808).length);
    var i_33556844 = 0;
    var j_33556845 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556844 < (s_33556808).length)) break Label2;
          var c_33556846 = s_33556808[i_33556844];
          if ((c_33556846 < 128)) {
          res_33556843[j_33556845] = String.fromCharCode(c_33556846);
          i_33556844 += 1;
          }
          else {
            var helper_33556858 = newSeq_33556826(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556859 = c_33556846.toString(16);
                  if ((((code_33556859) == null ? 0 : (code_33556859).length) == 1)) {
                  helper_33556858.push("%0");;
                  }
                  else {
                  helper_33556858.push("%");;
                  }
                  
                  helper_33556858.push(code_33556859);;
                  i_33556844 += 1;
                    if (((s_33556808).length <= i_33556844)) Temporary5 = true; else {                      Temporary5 = (s_33556808[i_33556844] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556846 = s_33556808[i_33556844];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556843[j_33556845] = decodeURIComponent(helper_33556858.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556843[j_33556845] = helper_33556858.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556845 += 1;
        }
    } while (false);
    if (res_33556843.length < j_33556845) { for (var i = res_33556843.length ; i < j_33556845 ; ++i) res_33556843.push(null); }
               else { res_33556843.length = j_33556845; };
    result_33556809 = res_33556843.join("");

  return result_33556809;

}

function raiseException(e_33556668, ename_33556669) {
    e_33556668.name = ename_33556669;
    if ((excHandler == 0)) {
    unhandledException(e_33556668);
    }
    
    e_33556668.trace = nimCopy(null, rawWriteStackTrace_33556632(), NTI33554439);
    throw e_33556668;

  
}

function subInt(a_33556945, b_33556946) {
        var result = a_33556945 - b_33556946;
    checkOverflowInt(result);
    return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function add_33556420(x_33556421, x_33556421_Idx, y_33556422) {
          if (x_33556421[x_33556421_Idx] === null) { x_33556421[x_33556421_Idx] = []; }
      var off = x_33556421[x_33556421_Idx].length;
      x_33556421[x_33556421_Idx].length += y_33556422.length;
      for (var i = 0; i < y_33556422.length; ++i) {
        x_33556421[x_33556421_Idx][off+i] = y_33556422.charCodeAt(i);
      }
    

  
}

function isFatPointer_33557132(ti_33557133) {
  var result_33557134 = false;

  BeforeRet: do {
    result_33557134 = !((ConstSet1[ti_33557133.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557134;

}

function nimCopyAux(dest_33557145, src_33557146, n_33557147) {
    switch (n_33557147.kind) {
    case 0:
      break;
    case 1:
            dest_33557145[n_33557147.offset] = nimCopy(dest_33557145[n_33557147.offset], src_33557146[n_33557147.offset], n_33557147.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557147.sons.length; i++) {
      nimCopyAux(dest_33557145, src_33557146, n_33557147.sons[i]);
    }
    
      break;
    case 3:
            dest_33557145[n_33557147.offset] = nimCopy(dest_33557145[n_33557147.offset], src_33557146[n_33557147.offset], n_33557147.typ);
      for (var i = 0; i < n_33557147.sons.length; ++i) {
        nimCopyAux(dest_33557145, src_33557146, n_33557147.sons[i][1]);
      }
    
      break;
    }

  
}

function raiseRangeError() {
    raiseException({message: makeNimstrLit("value out of range"), parent: null, m_type: NTI33555130, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556755, a_33556756, b_33556757) {
    var Temporary1;

    if ((b_33556757 < a_33556756)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(HEX24_318767107(i_33556755) || [],makeNimstrLit(" not in ") || [],HEX24_318767107(a_33556756) || [],makeNimstrLit(" .. ") || [],HEX24_318767107(b_33556757) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555128, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_251658415(result_251658417, result_251658417_Idx, x_251658418, start_251658419, n_251658420) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    var old_251658421 = (result_251658417[result_251658417_Idx]).length;
    F.line = 44;
    (result_251658417[result_251658417_Idx].length = chckRange(addInt(old_251658421, n_251658420), 0, 2147483647));
    Label1: do {
      F.line = 46;
      var iHEX60gensym4_251658435 = 0;
      F.line = 119;
      var i_570425574 = 0;
      Label2: do {
        F.line = 120;
          Label3: while (true) {
          if (!(i_570425574 < n_251658420)) break Label3;
            F.line = 49;
            iHEX60gensym4_251658435 = i_570425574;
            F.line = 49;
            result_251658417[result_251658417_Idx][chckIndx(addInt(old_251658421, iHEX60gensym4_251658435), 0, (result_251658417[result_251658417_Idx]).length - 1)] = x_251658418.charCodeAt(chckIndx(addInt(start_251658419, iHEX60gensym4_251658435), 0, (x_251658418).length - 1));
            F.line = 122;
            i_570425574 = addInt(i_570425574, 1);
          }
      } while (false);
    } while (false);
  framePtr = F.prev;

  
}

function addChars_251658411(result_251658413, result_251658413_Idx, x_251658414) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    addChars_251658415(result_251658413, result_251658413_Idx, x_251658414, 0, ((x_251658414) == null ? 0 : (x_251658414).length));
  framePtr = F.prev;

  
}

function addInt_251658436(result_251658437, result_251658437_Idx, x_251658438) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 110;
    addChars_251658411(result_251658437, result_251658437_Idx, ((x_251658438) + ""));
  framePtr = F.prev;

  
}

function addInt_251658457(result_251658458, result_251658458_Idx, x_251658459) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 114;
    addInt_251658436(result_251658458, result_251658458_Idx, x_251658459);
  framePtr = F.prev;

  
}

function HEX24_318767107(x_318767108) {
  var result_318767109 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 12;
    addInt_251658457(result_318767109, 0, x_318767108);
  framePtr = F.prev;

  return result_318767109[0];

}

function auxWriteStackTrace_33556560(f_33556561) {
          var Temporary3;

  var result_33556562 = [[]];

    var it_33556570 = f_33556561;
    var i_33556571 = 0;
    var total_33556572 = 0;
    var tempFrames_33556573 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555919);
    Label1: do {
        Label2: while (true) {
          if (!!((it_33556570 == null))) Temporary3 = false; else {            Temporary3 = (i_33556571 <= 63);          }        if (!Temporary3) break Label2;
          tempFrames_33556573[i_33556571].Field0 = it_33556570.procname;
          tempFrames_33556573[i_33556571].Field1 = it_33556570.line;
          tempFrames_33556573[i_33556571].Field2 = it_33556570.filename;
          i_33556571 += 1;
          total_33556572 += 1;
          it_33556570 = it_33556570.prev;
        }
    } while (false);
    Label4: do {
        Label5: while (true) {
        if (!!((it_33556570 == null))) break Label5;
          total_33556572 += 1;
          it_33556570 = it_33556570.prev;
        }
    } while (false);
    result_33556562[0] = nimCopy(null, [], NTI33554439);
    if (!((total_33556572 == i_33556571))) {
    result_33556562[0].push.apply(result_33556562[0], makeNimstrLit("("));;
    result_33556562[0].push.apply(result_33556562[0], HEX24_318767107((total_33556572 - i_33556571)));;
    result_33556562[0].push.apply(result_33556562[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    Label6: do {
      var j_33556603 = 0;
      var colontmp__570425566 = 0;
      colontmp__570425566 = (i_33556571 - 1);
      var res_570425568 = colontmp__570425566;
      Label7: do {
          Label8: while (true) {
          if (!(0 <= res_570425568)) break Label8;
            j_33556603 = res_570425568;
            result_33556562[0].push.apply(result_33556562[0], cstrToNimstr(tempFrames_33556573[j_33556603].Field2));;
            if ((0 < tempFrames_33556573[j_33556603].Field1)) {
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit("("));;
            addInt_251658457(result_33556562, 0, tempFrames_33556573[j_33556603].Field1);
            if (false) {
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit(", "));;
            addInt_251658457(result_33556562, 0, 0);
            }
            
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit(")"));;
            }
            
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit(" at "));;
            add_33556420(result_33556562, 0, tempFrames_33556573[j_33556603].Field0);
            result_33556562[0].push.apply(result_33556562[0], makeNimstrLit("\x0A"));;
            res_570425568 -= 1;
          }
      } while (false);
    } while (false);

  return result_33556562[0];

}

function rawWriteStackTrace_33556632() {
  var result_33556633 = [];

    if (!((framePtr == null))) {
    result_33556633 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_33556560(framePtr) || []), NTI33554439);
    }
    else {
      result_33556633 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI33554439);
    }
    

  return result_33556633;

}

function newSeq_33556826(len_33556828) {
  var result_33556829 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 680;
    result_33556829 = new Array(len_33556828); for (var i = 0 ; i < len_33556828 ; ++i) { result_33556829[i] = null; }  framePtr = F.prev;

  return result_33556829;

}

function unhandledException(e_33556664) {
    var buf_33556665 = [[]];
    if (!(((e_33556664.message).length == 0))) {
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556665[0].push.apply(buf_33556665[0], e_33556664.message);;
    }
    else {
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit(" ["));;
    add_33556420(buf_33556665, 0, e_33556664.name);
    buf_33556665[0].push.apply(buf_33556665[0], makeNimstrLit("]\x0A"));;
    buf_33556665[0].push.apply(buf_33556665[0], rawWriteStackTrace_33556632());;
    var cbuf_33556666 = toJSStr(buf_33556665[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556666);
  }
  else {
    throw cbuf_33556666;
  }
  

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555122, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556939) {
        if (a_33556939 > 2147483647 || a_33556939 < -2147483648) raiseOverflow();
  

  
}

function HEX3DHEX3D_570425357(x_570425359, y_570425360) {
  var result_570425361 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_570425369 = false;
    F.line = 302;
    sameObject_570425369 = x_570425359 === y_570425360
    if (sameObject_570425369) {
    F.line = 303;
    result_570425361 = true;
    break BeforeRet;
    }
    
    if (!(((x_570425359).length == (y_570425360).length))) {
    F.line = 306;
    result_570425361 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_570425383 = 0;
      F.line = 75;
      var colontmp__570425559 = 0;
      F.line = 308;
      colontmp__570425559 = subInt((x_570425359).length, 1);
      F.line = 90;
      var res_570425561 = 0;
      Label2: do {
        F.line = 91;
          Label3: while (true) {
          if (!(res_570425561 <= colontmp__570425559)) break Label3;
            F.line = 308;
            i_570425383 = res_570425561;
            if (!((x_570425359[chckIndx(i_570425383, 0, (x_570425359).length - 1)] == y_570425360[chckIndx(i_570425383, 0, (y_570425360).length - 1)]))) {
            F.line = 310;
            result_570425361 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            res_570425561 = addInt(res_570425561, 1);
          }
      } while (false);
    } while (false);
    F.line = 312;
    result_570425361 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_570425361;

}

function sysFatal_218103842(message_218103845) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_218103845, NTI33554439), m_type: NTI33555124, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_218103840(msg_218103841) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 28;
    sysFatal_218103842(msg_218103841);
  framePtr = F.prev;

  
}

function failedAssertImpl_218103864(msg_218103865) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 38;
    raiseAssert_218103840(msg_218103865);
  framePtr = F.prev;

  
}

function HEX3DHEX3D_570425415(x_570425417, y_570425418) {
  var result_570425419 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_570425427 = false;
    F.line = 302;
    sameObject_570425427 = x_570425417 === y_570425418
    if (sameObject_570425427) {
    F.line = 303;
    result_570425419 = true;
    break BeforeRet;
    }
    
    if (!(((x_570425417).length == (y_570425418).length))) {
    F.line = 306;
    result_570425419 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_570425441 = 0;
      F.line = 75;
      var colontmp__570425579 = 0;
      F.line = 308;
      colontmp__570425579 = subInt((x_570425417).length, 1);
      F.line = 90;
      var res_570425580 = 0;
      Label2: do {
        F.line = 91;
          Label3: while (true) {
          if (!(res_570425580 <= colontmp__570425579)) break Label3;
            F.line = 308;
            i_570425441 = res_570425580;
            if (!((x_570425417[chckIndx(i_570425441, 0, (x_570425417).length - 1)] == y_570425418[chckIndx(i_570425441, 0, (y_570425418).length - 1)]))) {
            F.line = 310;
            result_570425419 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            res_570425580 = addInt(res_570425580, 1);
          }
      } while (false);
    } while (false);
    F.line = 312;
    result_570425419 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_570425419;

}
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
if (!(HEX3DHEX3D_570425357([97, 98, 99, 100, 101].copyWithin(0, 3, 4), [100, 98, 99, 100, 101]))) {
F.line = 119;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(8, 10) `[\'a\', \'b\', \'c\', \'d\', \'e\'].copyWithin(0, 3, 4) == @[\'d\', \'b\', \'c\', \'d\', \'e\']` "));
}

if (!(HEX3DHEX3D_570425357([97, 98, 99, 100, 101].copyWithin(1, 3), [97, 100, 101, 100, 101]))) {
F.line = 119;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(9, 10) `[\'a\', \'b\', \'c\', \'d\', \'e\'].copyWithin(1, 3) == @[\'a\', \'d\', \'e\', \'d\', \'e\']` "));
}

if (!(HEX3DHEX3D_570425415(new Int32Array([1, 2, 3, 4, 5]).copyWithin(-2), [1, 2, 3, 1, 2]))) {
F.line = 119;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(10, 10) `[1, 2, 3, 4, 5].copyWithin(-2) == @[1, 2, 3, 1, 2]` "));
}

if (!(HEX3DHEX3D_570425415(new Int32Array([1, 2, 3, 4, 5]).copyWithin(0, 3), [4, 5, 3, 4, 5]))) {
F.line = 119;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(11, 10) `[1, 2, 3, 4, 5].copyWithin(0, 3) == @[4, 5, 3, 4, 5]` "));
}

if (!(HEX3DHEX3D_570425415(new Int32Array([1, 2, 3, 4, 5]).copyWithin(0, 3, 4), [4, 2, 3, 4, 5]))) {
F.line = 119;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(12, 10) `[1, 2, 3, 4, 5].copyWithin(0, 3, 4) == @[4, 2, 3, 4, 5]` "));
}

if (!(HEX3DHEX3D_570425415(new Int32Array([1, 2, 3, 4, 5]).copyWithin(-2, -3, -1), [1, 2, 3, 3, 4]))) {
F.line = 119;
failedAssertImpl_218103864(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(13, 10) `[1, 2, 3, 4, 5].copyWithin(-2, -3, -1) == @[1, 2, 3, 3, 4]` "));
}

framePtr = F.prev;
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
