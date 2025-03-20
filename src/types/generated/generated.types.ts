/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum ApplicationEnum {
  Unknown = 'Unknown',
  EDriver = 'EDriver',
  EService = 'EService',
}

export interface DriverOverviewDto {
  /** @format int32 */
  driverId?: number;
  statistic?: DriverStatisticDto;
}

export interface DriverStatisticDto {
  /** @format int32 */
  noAccidentMonth?: number;
  /** @format int32 */
  completedTripCount?: number;
  /** @format int32 */
  totalMileageKm?: number;
}

export interface LoginRequest {
  userId?: string | null;
  login?: string | null;
  password?: string | null;
  company?: string | null;
  application?: ApplicationEnum;
}

export interface TaskItemDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  carId?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  /** @format date-time */
  date?: string | null;
  /** @format date-time */
  realizeDate?: string | null;
  /** @format float */
  findKm?: number | null;
  /** @format float */
  findMh?: number | null;
  car?: VehicleDto;
  companyCode?: string | null;
}

export interface TripDetailDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format date-time */
  start?: string;
  /** @format date-time */
  end?: string;
  stops?: TripStopDto[] | null;
}

export interface TripListItemDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format date-time */
  start?: string;
  /** @format date-time */
  end?: string;
  stops?: string[] | null;
}

export interface TripOverviewDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  driverId?: number | null;
  driverName?: string | null;
  /** @format date-time */
  start?: string;
  /** @format date-time */
  end?: string;
  stops?: TripStopDto[] | null;
}

export interface TripOverviewsRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
}

export interface TripStopDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  tripId?: number;
  name?: string | null;
  isProcessing?: boolean;
  isCompleted?: boolean;
  /** @format date-time */
  scheduledArrival?: string | null;
  /** @format date-time */
  arrival?: string | null;
  /** @format date-time */
  scheduledDeparture?: string | null;
  /** @format date-time */
  departure?: string | null;
}

export interface TripsRequest {
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
  isCompleted?: boolean;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
}

export interface UserDto {
  /** @format int32 */
  id?: number;
  /** @format int64 */
  hipUserId?: number | null;
  email?: string | null;
  name?: string | null;
  company?: string | null;
  avatarUrl?: string | null;
  /** @format int32 */
  driverId?: number | null;
}

export interface UserTaskItemDto {
  task?: TaskItemDto;
  isRead?: boolean;
}

export interface VehicleDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  externalId?: number;
  /** @format int32 */
  groupId?: number;
  licencePlate?: string | null;
  brand?: string | null;
  model?: string | null;
  tank?: string | null;
  monthKm?: string | null;
  location?: string | null;
  locationDateTime?: string | null;
  /** @format float */
  latitude?: number | null;
  /** @format float */
  longitude?: number | null;
}

export interface ConnectionFirebaseTokenCreateParams {
  firebaseToken?: string;
}
export interface StopDetailDto {
  info: Info;
  contacts: Contact[];
  address: Address;
  deliveries: Delivery[];
  ratings: Rating[];
}

export interface StopDetailDto {
  info: Info;
  contacts: Contact[];
  address: Address;
  deliveries: Delivery[];
  ratings: Rating[];
}

export interface Info {
  id: number;
  unloadingStatus: string;
  priorityDocument: boolean;
  note: string;
  city: string;
  placeName: string;
  carriageWindow: string;
  scheduledStopTime: string;
}

export interface Contact {
  number: string;
  description: string;
}

export interface Address {
  street: string;
  zipCode: string;
  city: string;
  mapEmbedLink: string;
}

export interface Delivery {
  id: number;
  placeName: string;
  operatingHours: string;
  unloadingPlan: string;
  reality: string;
}

export interface Rating {
  category: string;
  count: number;
  stars: number;
}
