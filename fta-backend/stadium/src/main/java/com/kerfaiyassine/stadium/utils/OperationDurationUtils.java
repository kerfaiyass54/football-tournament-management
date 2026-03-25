package com.kerfaiyassine.stadium.utils;

import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;


@Component
public class OperationDurationUtils {

    private OperationDurationUtils() {}

    public static Duration getDuration(Instant startTime, Instant endTime) {
        if (startTime == null || endTime == null) {
            throw new IllegalArgumentException("Start time and end time must not be null");
        }
        if (endTime.isBefore(startTime)) {
            throw new IllegalArgumentException("End time must not be before start time");
        }
        return Duration.between(startTime, endTime);
    }

    public static long getDurationInSeconds(Instant startTime, Instant endTime) {
        return getDuration(startTime, endTime).getSeconds();
    }

    public static long getDurationInMinutes(Instant startTime, Instant endTime) {
        return getDuration(startTime, endTime).toMinutes();
    }

    public static long getDurationInHours(Instant startTime, Instant endTime) {
        return getDuration(startTime, endTime).toHours();
    }

    public static long getDurationInDays(Instant startTime, Instant endTime) {
        return getDuration(startTime, endTime).toDays();
    }

    public static String getFormattedDuration(Instant startTime, Instant endTime) {
        Duration duration = getDuration(startTime, endTime);
        long days    = duration.toDays();
        long hours   = duration.toHoursPart();
        long minutes = duration.toMinutesPart();
        long seconds = duration.toSecondsPart();

        return String.format("%d day(s), %d hour(s), %d minute(s), %d second(s)",
                days, hours, minutes, seconds);
    }
}