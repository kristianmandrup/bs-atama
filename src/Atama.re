type any;
type callback = unit => unit;
module History = {
  type t;
};
module Connection = {
  type t;
};
[@bs.send] external listen: (~cb: callback, unit) => unit = "";
[@bs.send] external connect: any => Connection.t = "";
[@bs.send] external merge: (~state: any, ~added: any => any, unit) => any = "";
[@bs.send] external freeze: (~state: any, ~cb: callback, unit) => any = "";
[@bs.send] external history: unit => History.t = "";