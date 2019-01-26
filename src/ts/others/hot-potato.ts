/**
  My Hot Potato Game : Via a Circular Queue. You take from Beginning and add to the End.
 */
import Queue from '../data-structures/queue';
export function hotPotato(names: Array<string>, number: number) {
  const queue = new Queue<string>();
  const eliminatedList: Array<string> = [];
  names.forEach(name => queue.enqueue(name));  // Places all the Players in a Queue
  // Create a Circular Queue where you take a Player from the Top and Add him to the Back. its like passing
  // hot potato over until a certain condition is met . This condition here is i being equal to the Number
  // In which case you remove the person from the Queue
  while (queue.size() > 1) {
    for (let i = 0 ; i < number; i++) {
          queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  };
}
