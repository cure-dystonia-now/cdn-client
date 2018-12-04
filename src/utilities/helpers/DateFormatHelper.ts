import * as moment from "moment";

export class DateFormatHelper {

  public static formatEvent(isoDateString: string): string {
    const date = moment.parseZone(isoDateString);
    return date.format("dddd, MMMM Do YYYY h:mm A");
  }

}