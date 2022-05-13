type QueueItem = () => Promise<void>

export default class Typewriter {
  
  deletingSpeed: number;
  element: HTMLElement;
  loop: boolean;
  #queue: QueueItem[] = []
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
    this.#queue.push(()=>{
      return new Promise((resolve, reject) =>{
        resolve()
      })
    })
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

async start() {
  for(let cb of this.#queue){
    await cb()
  }
  return this
}

}
