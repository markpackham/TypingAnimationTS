type QueueItem = () => Promise<void>

export default class Typewriter {
  
  deletingSpeed: number;
  #element: HTMLElement;
  loop: boolean;
  #queue: QueueItem[] = []
  typingSpeed: number;

  constructor(
    parent: HTMLElement,
    { 
      deletingSpeed = 50, 
      loop = false, 
      typingSpeed = 50
    } = {}
  ) {
    this.#element = document.createElement("div")
    parent.append(this.#element)
    this.deletingSpeed = deletingSpeed;
    this.loop = loop;
    this.typingSpeed = typingSpeed;
  }

  typeString(string: string) {
    this.#queue.push(()=>{
      return new Promise((resolve) =>{
        console.log(string)
        resolve()
      })
    })
    return this
  }

  deleteChars(number: number){
    console.log(number)
    return this
  }

  // We use the default delete speed of the constructor if nothing is passed in
  deleteAll(deletingSpeed = this.deletingSpeed){
    console.log(deletingSpeed)
    return this
  }

  pauseFor(duration: number){
    console.log(duration)
    return this
  }

async start() {
  for(let callBack of this.#queue){
    await callBack()
  }
  return this
}

}
