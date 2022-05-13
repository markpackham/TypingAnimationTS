export default class Typewriter {
  
  deletingSpeed: number;
  element: HTMLElement;
  loop: boolean;
  typingSpeed: number;

  constructor(
    element: HTMLElement,
    { 
      deletingSpeed = 50, 
      loop = false, 
      typingSpeed = 50
    } = {}
  ) {
    this.deletingSpeed = deletingSpeed;
    this.element = element;
    this.loop = loop;
    this.typingSpeed = typingSpeed;
  }

  typeString(string: string) {
    return this
  }

  deleteChars(number: number){
    return this
  }

  // We use the default delete speed of the constructor if nothing is passed in
  deleteAll(deletingSpeed = this.deletingSpeed){
    return this
  }

  pauseFor(duration: number){
    return this
  }

  start(){
    return this
  }

}
