interface Exam {
  name: examTypes;
  mapaA?: {},
  holterA?: {},
}

enum examTypes {
  Mapa = 'Mapa',
  Holter = 'Holter',
}

class Mapa implements Exam {
  constructor(props: any) {
    Object.assign(this, props);
  }
  name = examTypes.Mapa;
  mapaA = {
    e: null,
    c: null
  }
}

class Holter implements Exam {
  constructor(props: any) {
    Object.assign(this, props);
  }
  name = examTypes.Holter;
  holterA = {
    e: null,
    c: null
  }
}


const create = (exam: Exam) => {
  let a;
  if(Object.values(examTypes).includes(exam.name)) {
    eval(`a = new ${exam.name}(${JSON.stringify(exam)})`)
  }
  console.log(a)
}

const exam = {
  name: 'Mapa' as examTypes,
  mapaA: {
    e: 1,
    c: 2
  }
}

create(exam)