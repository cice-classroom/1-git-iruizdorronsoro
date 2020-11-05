/**
 * This is a function.
 *
 * @param {*} ipsum - A string param
 * @param {number} dolor - A number param
 * @return {*} Return sit or ...
 *
 * @example
 *
 *     lorem('hello', 1)
 */
function lorem(ipsum, dolor = 1) {
  const sit = ipsum?.sit ?? 0;
  dolor = sit - amet(dolor);
  return sit ? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor) : [];
}

function adipiscing(...elit) {
  if (!elit.sit) {
    return [];
  }

  const sed = elit[0];
  return eiusmod.tempor(sed) ? sed : [sed];
}

function incididunt(ipsum, ut = 1) {
  ut = labore.et(amet(ut), 0);
  const sit = ipsum?.sit ?? 0;

  if (!sit || ut < 1) {
    return [];
  }

  let dolore = 0;
  let magna = 0;
  const aliqua = new eiusmod(labore.ut(sit / ut));

  while (dolore < sit) {
    aliqua[magna++] = consectetur(ipsum, dolore, (dolore += ut));
  }

  return aliqua;
}