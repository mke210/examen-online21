// Examen Online 21 — utilidades compartidas (se carga después de config.js)
const EX21 = {
  // Escapa texto para insertarlo como HTML
  esc(v) {
    if (v === undefined || v === null) return '';
    return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },
  toast(texto, tipo) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = texto;
    t.className = tipo || '';
    t.style.display = 'block';
    clearTimeout(EX21._tt);
    EX21._tt = setTimeout(() => { t.style.display = 'none'; }, tipo === 'error' ? 7000 : 3500);
  },
  // Código de aspirante: mayúsculas, sin espacios
  normalizarCodigo(c) { return String(c || '').trim().toUpperCase(); },
  codigoValido(c) { return /^[A-Z0-9-]{1,20}$/.test(c); },
  nipValido(n) { return /^[0-9]{5}$/.test(n); },
  // El documento de acceso se llama CODIGO_NIP: sin el NIP no se puede encontrar
  idAcceso(codigo, nip) { return codigo + '_' + nip; },
  idIntento(examenId, acceso) { return examenId + '__' + acceso; },
  sesion() { try { return JSON.parse(localStorage.getItem('ex21_sesion')) || null; } catch (e) { return null; } },
  guardarSesion(s) { localStorage.setItem('ex21_sesion', JSON.stringify(s)); },
  cerrarSesion() { localStorage.removeItem('ex21_sesion'); },
  // Convierte un valor de fecha de Firestore (Timestamp) o Date a milisegundos
  ms(v) { if (!v) return 0; if (typeof v.toMillis === 'function') return v.toMillis(); if (typeof v.toDate === 'function') return v.toDate().getTime(); return new Date(v).getTime() || 0; },
  mensajeError(e) {
    const c = (e && e.code) || '';
    if (c.includes('permission-denied')) return 'Permiso denegado por las reglas de la base de datos.';
    if (c.includes('unavailable') || c.includes('network')) return 'Sin conexión con el servidor. Revisa tu internet.';
    return (e && e.message) || 'Error desconocido';
  }
};
