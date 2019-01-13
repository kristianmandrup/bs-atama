type any;
type callback = unit => unit;
module History = {
  type t;
};
module Connection = {
  type t('a);
};
[@bs.module "atama"] external listen: (~cb: callback, unit) => unit = "";
[@bs.module "atama"] external connect: 'a => Connection.t('a) = "";
[@bs.module "atama"]
external merge: (~state: 'a, ~added: 'b => 'c, unit) => 'a = "";
[@bs.module "atama"]
external freeze: (~state: 'a, ~cb: callback, unit) => 'a = "";
[@bs.module "atama"] external history: unit => History.t = "";