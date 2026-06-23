import type { AccountConfig } from "@/lib/types";
import { chempoint } from "./chempoint";
import { americanTextile } from "./american-textile";
import { bobBarker } from "./bob-barker";
import { mdBuildingProducts } from "./md-building-products";
import { cpskin } from "./cpskin";
import { msc } from "./msc";
import { mouser } from "./mouser";
import { hoffmaster } from "./hoffmaster";
import { sumitomo } from "./sumitomo";
import { conceptGroup } from "./concept-group";
import { idt } from "./idt";
import { thermoFisher } from "./thermo-fisher";
import { stihl } from "./stihl";
import { schneider } from "./schneider";
import { lg } from "./lg";
import { bunzlCanada } from "./bunzl-canada";
import { milliporeSigma } from "./milliporesigma";
import { philips } from "./philips";
import { adiSnapone } from "./adi-snapone";
import { galls } from "./galls";
import { honeywell } from "./honeywell";
import { masimo } from "./masimo";
import { standardTextile } from "./standard-textile";
import { millerKnoll } from "./millerknoll";
import { airgas } from "./airgas";
import { hdSupply } from "./hd-supply";
import { crLaurence } from "./cr-laurence";
import { terumo } from "./terumo";
import { bioRad } from "./bio-rad";
import { mckesson } from "./mckesson";
import { matheson } from "./matheson";
import { zekelman } from "./zekelman";
import { kravet } from "./kravet";
import { sofidel } from "./sofidel";
import { greif } from "./greif";
import { chase } from "./chase";
import { banner } from "./banner";
import { landOFrost } from "./landofrost";
import { watts } from "./watts";
import { elevate } from "./elevate";

/**
 * The seed registry of fully-worked accounts.
 * For B2B Connect 2026 this grows to the 62 attendees; ChemPoint is account #1.
 * Adding an account = add a file here (or a Supabase row) — never a code change elsewhere.
 */
export const SEED_ACCOUNTS: AccountConfig[] = [chempoint, americanTextile, bobBarker, mdBuildingProducts, cpskin, msc, mouser, hoffmaster, sumitomo, conceptGroup, idt, thermoFisher, stihl, schneider, lg, bunzlCanada, milliporeSigma, philips, adiSnapone, galls, honeywell, masimo, standardTextile, millerKnoll, airgas, hdSupply, crLaurence, terumo, bioRad, mckesson, matheson, zekelman, kravet, sofidel, greif, chase, banner, landOFrost, watts, elevate];
